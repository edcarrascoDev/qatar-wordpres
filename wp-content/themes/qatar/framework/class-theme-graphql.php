<?php

class Theme_Graphql {

	public function __construct() {
        add_action('graphql_register_types', [$this, 'set_graphql_register_types']);
        add_action('graphql_register_types', [$this, 'set_graphql_mutation']);
	}

    /**
     * @throws Exception
     */
    public function set_graphql_register_types() {
        register_graphql_field('RootQuery', 'brandsByCategories', [
            'type' => ['list_of' => 'brand'],
            'args' => [
                'categories' => [
                    'type' => ['list_of' => 'String'],
                    'description' => 'Categories slugs to filter brands by',
                ],
            ],
            'resolve' => [$this, 'register_brands_by_categories_query'],
        ]);

        register_graphql_field('Brand', 'image', [
            'type' => 'String',
            'description' => __('URL de la imagen de la marca', 'industriasqatar.com'),
            'resolve' => [$this, 'register_image_value_on_brand_query'],
        ]);
    }

    /**
     * @throws Exception
     */
    public function set_graphql_mutation() {
        register_graphql_mutation('createContact', [
            'inputFields' => [
                'name' => [
                    'type' => 'String',
                    'description' => 'Name of the user',
                ],
                'phone' => [
                    'type' => 'String',
                    'description' => 'phone of the user',
                ],
                'email' => [
                    'type' => 'String',
                    'description' => 'Email of the user',
                ],
                'message' => [
                    'type' => 'String',
                    'description' => 'Message from the user',
                ],
            ],
            'outputFields' => [
                'success' => [
                    'type' => 'Boolean',
                    'description' => 'Whether the submission was successful',
                ],
                'message' => [
                    'type' => 'String',
                    'description' => 'Result message',
                ],
            ],
            'mutateAndGetPayload' => [$this, 'register_contact_mutation'],
        ]);
    }

    public function register_brands_by_categories_query($source, $args, $context, $info) {
        $category_slug = $args['categories'];

        $brands = get_terms([
            'taxonomy' => 'brands',
            'hide_empty' => true,
        ]);

        $filtered_brands = [];

        foreach ($brands as $brand) {
            $query_args = [
                'post_type' => 'product',
                'tax_query' => [
                    'relation' => 'AND',
                    [
                        'taxonomy' => 'product_cat',
                        'field' => 'slug',
                        'terms' => $category_slug,
                    ],
                    [
                        'taxonomy' => 'brands',
                        'field' => 'slug',
                        'terms' => $brand->slug,
                    ],
                ],
                'posts_per_page' => 1,
            ];

            $query = new WP_Query($query_args);

            if ($query->have_posts()) {
                $filtered_brands[] = $brand;
            }
        }

        return $filtered_brands;
    }

	public function register_image_value_on_brand_query($term) {
        $image_url = get_taxonomy_image($term->term_id, false);

        if (!$image_url || $image_url === "Please Upload Image First!") {
            return null;
        }
        return $image_url;
    }

    public function register_contact_mutation ($input, $context, $info) {
        $post_id = wp_insert_post([
            'post_type' => 'contacts',
            'post_title' => $input['name'],
            'post_content' => $input['message'],
            'post_status' => 'publish',
        ]);

        if (is_wp_error($post_id)) {
            return [
                'success' => false,
                'message' => 'There was an error processing the submission',
            ];
        }

        update_post_meta($post_id, 'email', $input['email']);
        update_post_meta($post_id, 'message', $input['message']);
        update_post_meta($post_id, 'phone', $input['phone']);

        return [
            'success' => true,
            'message' => 'Contact request received successfully',
        ];
    }
}