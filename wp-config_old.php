<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('WP_CACHE', true);
define( 'WPCACHEHOME', '/home/paocar5/industriasqatar.com/wp-content/plugins/wp-super-cache/' );
define('DB_NAME', 'db_qatar_dev');

/** MySQL database username */
define('DB_USER', 'qatar_root');

/** MySQL database password */
define('DB_PASSWORD', 'E#&35FzBEUj');

/** MySQL hostname */
define('DB_HOST', 'mysql.industriasqatar.com');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '@/cLRu1n1Rq~Ib*fVSO+&/PP^@D9)^Wqa|B~T7#CU5/FbRc#a2+Z1a(Nx|!YBGmx');
define('SECURE_AUTH_KEY',  '^p~+|Hl;rzt/)6)z`VraMvUaB&)_^cBOBKJP#&ZrAR1Bf*VL(7OqLbn+Xn?7%/sU');
define('LOGGED_IN_KEY',    'Rmh|RYc%O|91xCOyg;K)!@Lj~!Jg|39h?y:U(aUY^vh;sn1%tt_OA"WRdozTptg"');
define('NONCE_KEY',        ';6_sNUO1_iYdRI5NaWDoZ*j|?K|g:j"B#NBEvcV~7nGCxAfc7z~~^$lCGieDI0Na');
define('AUTH_SALT',        '%;7s*h&6ck8d8@N!XYX#MI@"ru@/OecZE0k("w#;/UH~hZW9bp2mh_mw9t~o0Gq:');
define('SECURE_AUTH_SALT', 'J1iSZ)beK9/bHFJ8Bz$f1a9pr?to_VnZrgFcZB0$C(fI^L6^(_;:8*B7EB2d:cf_');
define('LOGGED_IN_SALT',   '5GmW;WvOCYXi5rVh`x/H1$w;8p$Tb6f!BIkDpU*hDMNlSp%ui~Gh5joVc5my_3V"');
define('NONCE_SALT',       'JYOfsLZwvF+zx"4mL%p$SSwvSUCSc0R^(!eh/s36TPz5jIq/Sb3;)`p_!dX4@ba?');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'iq_';

/**
 * Limits total Post Revisions saved per Post/Page.
 * Change or comment this line out if you would like to increase or remove the limit.
 */
define('WP_POST_REVISIONS',  10);

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/**
 * Removing this could cause issues with your experience in the DreamHost panel
 */

if (preg_match("/^(.*)\.dream\.website$/", $_SERVER['HTTP_HOST'])) {
        $proto = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') ? "https" : "http";
        define('WP_SITEURL', $proto . '://' . $_SERVER['HTTP_HOST']);
        define('WP_HOME',    $proto . '://' . $_SERVER['HTTP_HOST']);
}

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

