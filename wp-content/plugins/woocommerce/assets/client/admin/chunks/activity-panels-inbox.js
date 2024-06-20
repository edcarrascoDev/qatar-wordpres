'use strict';
(globalThis.webpackChunk_wcAdmin_webpackJsonp =
  globalThis.webpackChunk_wcAdmin_webpackJsonp || []).push([
  [8851],
  {
    86053: (e, t, o) => {
      o.d(t, { U: () => h, e: () => N });
      var a = o(69307),
        s = o(87608),
        n = o.n(s),
        c = o(10130),
        i = o(76292),
        r = o.n(i),
        l = o(7862),
        m = o.n(l),
        d = o(86020),
        _ = o(55609),
        u = o(92819);
      class p extends a.Component {
        render() {
          const { className: e, hasAction: t, hasDate: o, hasSubtitle: s, lines: c } = this.props,
            i = n()('woocommerce-activity-card is-loading', e);
          return (0, a.createElement)(
            'div',
            { className: i, 'aria-hidden': !0 },
            (0, a.createElement)(
              'span',
              { className: 'woocommerce-activity-card__icon' },
              (0, a.createElement)('span', { className: 'is-placeholder' }),
            ),
            (0, a.createElement)(
              'div',
              { className: 'woocommerce-activity-card__header' },
              (0, a.createElement)('div', {
                className: 'woocommerce-activity-card__title is-placeholder',
              }),
              s &&
                (0, a.createElement)('div', {
                  className: 'woocommerce-activity-card__subtitle is-placeholder',
                }),
              o &&
                (0, a.createElement)(
                  'div',
                  { className: 'woocommerce-activity-card__date' },
                  (0, a.createElement)('span', { className: 'is-placeholder' }),
                ),
            ),
            (0, a.createElement)(
              'div',
              { className: 'woocommerce-activity-card__body' },
              (0, u.range)(c).map(e =>
                (0, a.createElement)('span', { className: 'is-placeholder', key: e }),
              ),
            ),
            t &&
              (0, a.createElement)(
                'div',
                { className: 'woocommerce-activity-card__actions' },
                (0, a.createElement)('span', { className: 'is-placeholder' }),
              ),
          );
        }
      }
      (p.propTypes = {
        className: m().string,
        hasAction: m().bool,
        hasDate: m().bool,
        hasSubtitle: m().bool,
        lines: m().number,
      }),
        (p.defaultProps = { hasAction: !1, hasDate: !1, hasSubtitle: !1, lines: 1 });
      const N = p;
      class h extends a.Component {
        getCard() {
          const {
              actions: e,
              className: t,
              children: o,
              date: s,
              icon: c,
              subtitle: i,
              title: l,
              unread: m,
            } = this.props,
            _ = n()('woocommerce-activity-card', t),
            u = Array.isArray(e) ? e : [e],
            p = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/.test(s)
              ? r()
                  .utc(s)
                  .fromNow()
              : s;
          return (0, a.createElement)(
            'section',
            { className: _ },
            m && (0, a.createElement)('span', { className: 'woocommerce-activity-card__unread' }),
            c &&
              (0, a.createElement)(
                'span',
                { className: 'woocommerce-activity-card__icon', 'aria-hidden': !0 },
                c,
              ),
            l &&
              (0, a.createElement)(
                'header',
                { className: 'woocommerce-activity-card__header' },
                (0, a.createElement)(d.H, { className: 'woocommerce-activity-card__title' }, l),
                i &&
                  (0, a.createElement)(
                    'div',
                    { className: 'woocommerce-activity-card__subtitle' },
                    i,
                  ),
                p &&
                  (0, a.createElement)('span', { className: 'woocommerce-activity-card__date' }, p),
              ),
            o &&
              (0, a.createElement)(d.Section, { className: 'woocommerce-activity-card__body' }, o),
            e &&
              (0, a.createElement)(
                'footer',
                { className: 'woocommerce-activity-card__actions' },
                u.map((e, t) => (0, a.cloneElement)(e, { key: t })),
              ),
          );
        }
        render() {
          const { onClick: e } = this.props;
          return e
            ? (0, a.createElement)(
                _.Button,
                { className: 'woocommerce-activity-card__button', onClick: e },
                this.getCard(),
              )
            : this.getCard();
        }
      }
      (h.propTypes = {
        actions: m().oneOfType([m().arrayOf(m().element), m().element]),
        onClick: m().func,
        className: m().string,
        children: m().node,
        date: m().string,
        icon: m().node,
        subtitle: m().node,
        title: m().oneOfType([m().string, m().node]),
        unread: m().bool,
      }),
        (h.defaultProps = { icon: (0, a.createElement)(c.Z, { size: 48 }), unread: !1 });
    },
    23348: (e, t, o) => {
      o.r(t), o.d(t, { InboxPanel: () => c, default: () => i });
      var a = o(69307),
        s = o(63724),
        n = o(22669);
      const c = ({ hasAbbreviatedNotifications: e, thingsToDoNextCount: t }) =>
          (0, a.createElement)(
            'div',
            { className: 'woocommerce-notification-panels' },
            e && (0, a.createElement)(n.vn, { thingsToDoNextCount: t }),
            (0, a.createElement)(s.Z, { showHeader: !1 }),
          ),
        i = c;
    },
    63724: (e, t, o) => {
      o.d(t, { Z: () => k });
      var a = o(69307),
        s = o(65736),
        n = o(86020),
        c = o(55609),
        i = o(67221),
        r = o(9818),
        l = o(14599),
        m = o(86892),
        d = o(83165),
        _ = o(14812),
        u = o(76292),
        p = o.n(u),
        N = o(86053),
        h = o(86357),
        E = o(53736);
      const w = ({ onClose: e }) => {
          const { createNotice: t } = (0, r.useDispatch)('core/notices'),
            { batchUpdateNotes: o, removeAllNotes: n } = (0, r.useDispatch)(i.NOTES_STORE_NAME);
          return (0, a.createElement)(
            a.Fragment,
            null,
            (0, a.createElement)(
              c.Modal,
              {
                title: (0, s.__)('Dismiss all messages', 'woocommerce'),
                className: 'woocommerce-inbox-dismiss-all-modal',
                onRequestClose: e,
              },
              (0, a.createElement)(
                'div',
                { className: 'woocommerce-inbox-dismiss-all-modal__wrapper' },
                (0, a.createElement)(
                  'div',
                  { className: 'woocommerce-usage-modal__message' },
                  (0, s.__)(
                    'Are you sure? Inbox messages will be dismissed forever.',
                    'woocommerce',
                  ),
                ),
                (0, a.createElement)(
                  'div',
                  { className: 'woocommerce-usage-modal__actions' },
                  (0, a.createElement)(
                    c.Button,
                    { onClick: e },
                    (0, s.__)('Cancel', 'woocommerce'),
                  ),
                  (0, a.createElement)(
                    c.Button,
                    {
                      isPrimary: !0,
                      onClick: () => {
                        (async () => {
                          (0, l.recordEvent)('wcadmin_inbox_action_dismissall', {});
                          try {
                            const e = await n({ status: 'unactioned' });
                            t('success', (0, s.__)('All messages dismissed', 'woocommerce'), {
                              actions: [
                                {
                                  label: (0, s.__)('Undo', 'woocommerce'),
                                  onClick: () => {
                                    o(
                                      e.map(e => e.id),
                                      { is_deleted: 0 },
                                    );
                                  },
                                },
                              ],
                            });
                          } catch (o) {
                            t('error', (0, s.__)('Messages could not be dismissed', 'woocommerce')),
                              e();
                          }
                        })(),
                          e();
                      },
                    },
                    (0, s.__)('Yes, dismiss all', 'woocommerce'),
                  ),
                ),
              ),
            ),
          );
        },
        g = {
          page: 1,
          per_page: 5,
          status: 'unactioned',
          type: i.QUERY_DEFAULTS.noteTypes,
          orderby: 'date',
          order: 'desc',
          _fields: [
            'id',
            'name',
            'title',
            'content',
            'type',
            'status',
            'actions',
            'date_created',
            'date_created_gmt',
            'layout',
            'image',
            'is_deleted',
            'is_read',
            'locale',
          ],
        },
        b = ['en_US', 'en_AU', 'en_CA', 'en_GB', 'en_ZA'],
        v = p()('2022-01-11', 'YYYY-MM-DD').valueOf(),
        y = (e, t) => {
          (0, l.recordEvent)('inbox_action_click', {
            note_name: e.name,
            note_title: e.title,
            note_content_inner_link: t,
          });
        };
      let C = !1;
      const k = ({ showHeader: e = !0 }) => {
        const [t, o] = (0, a.useState)(g.per_page),
          [u, k] = (0, a.useState)(!1),
          [x, S] = (0, a.useState)([]),
          [A, f] = (0, a.useState)({}),
          { createNotice: D } = (0, r.useDispatch)('core/notices'),
          {
            removeNote: T,
            updateNote: M,
            triggerNoteAction: U,
            invalidateResolutionForStoreSelector: B,
          } = (0, r.useDispatch)(i.NOTES_STORE_NAME),
          R = (0, E.GG)(),
          O = (0, a.useMemo)(() => ({ ...g, per_page: t }), [t]),
          {
            isError: Y,
            notes: H,
            notesHaveResolved: F,
            isBatchUpdating: P,
            unreadNotesCount: I,
          } = (0, r.useSelect)(e => {
            const {
              getNotes: t,
              getNotesError: o,
              isNotesRequesting: a,
              hasFinishedResolution: s,
            } = e(i.NOTES_STORE_NAME);
            return {
              notes: t(O),
              unreadNotesCount: t({ ...g, is_read: !1, per_page: -1 }).length,
              isError: Boolean(o('getNotes', [O])),
              isBatchUpdating: a('batchUpdateNotes'),
              notesHaveResolved: !a('batchUpdateNotes') && s('getNotes', [O]),
            };
          });
        (0, a.useEffect)(() => {
          F && H.length < t && k(!0),
            F &&
              H.length &&
              S(
                H.map(e => {
                  const t = p()(e.date_created_gmt, 'YYYY-MM-DD').valueOf();
                  return b.includes(e.locale) && t >= v
                    ? { ...e, content: (0, h.r7)(e.content, 320) }
                    : e;
                }),
              );
        }, [H, F]);
        const [Z, z] = (0, a.useState)(!1);
        if (Y) {
          const e = (0, s.__)(
              'There was an error getting your inbox. Please try again.',
              'woocommerce',
            ),
            t = (0, s.__)('Reload', 'woocommerce'),
            o = () => {
              window.location.reload();
            };
          return (0, a.createElement)(n.EmptyContent, {
            title: e,
            actionLabel: t,
            actionURL: null,
            actionCallback: o,
          });
        }
        return F && !x.length
          ? null
          : (0, a.createElement)(
              a.Fragment,
              null,
              Z &&
                (0, a.createElement)(w, {
                  onClose: () => {
                    z(!1);
                  },
                }),
              (0, a.createElement)(
                'div',
                { className: 'woocommerce-homepage-notes-wrapper' },
                !F &&
                  !x.length &&
                  (0, a.createElement)(
                    n.Section,
                    null,
                    (0, a.createElement)(_.InboxNotePlaceholder, {
                      className: 'banner message-is-unread',
                    }),
                  ),
                (0, a.createElement)(
                  n.Section,
                  null,
                  Boolean(x.length) &&
                    (({
                      hasNotes: e,
                      isBatchUpdating: t,
                      notes: o,
                      onDismiss: i,
                      onNoteActionClick: r,
                      onNoteVisible: u,
                      setShowDismissAllModal: p,
                      showHeader: h = !0,
                      loadMoreNotes: E,
                      allNotesFetched: w,
                      notesHaveResolved: b,
                      unreadNotesCount: v,
                    }) => {
                      if (t) return;
                      if (!e)
                        return (0, a.createElement)(
                          N.U,
                          {
                            className: 'woocommerce-empty-activity-card',
                            title: (0, s.__)('Your inbox is empty', 'woocommerce'),
                            icon: !1,
                          },
                          (0, s.__)(
                            "As things begin to happen in your store your inbox will start to fill up. You'll see things like achievements, new feature announcements, extension recommendations and more!",
                            'woocommerce',
                          ),
                        );
                      C || ((0, l.recordEvent)('inbox_panel_view', { total: o.length }), (C = !0));
                      const k = Object.keys(o).map(e => o[e]);
                      return (0, a.createElement)(
                        c.Card,
                        { size: 'large' },
                        h &&
                          (0, a.createElement)(
                            c.CardHeader,
                            { size: 'medium' },
                            (0, a.createElement)(
                              'div',
                              { className: 'wooocommerce-inbox-card__header' },
                              (0, a.createElement)(
                                _.Text,
                                { size: '20', lineHeight: '28px', variant: 'title.small' },
                                (0, s.__)('Inbox', 'woocommerce'),
                              ),
                              (0, a.createElement)(n.Badge, { count: v }),
                            ),
                            (0, a.createElement)(n.EllipsisMenu, {
                              label: (0, s.__)('Inbox Notes Options', 'woocommerce'),
                              renderContent: ({ onToggle: e }) =>
                                (0, a.createElement)(
                                  'div',
                                  { className: 'woocommerce-inbox-card__section-controls' },
                                  (0, a.createElement)(
                                    c.Button,
                                    {
                                      onClick: () => {
                                        p(!0), e();
                                      },
                                    },
                                    (0, s.__)('Dismiss all', 'woocommerce'),
                                  ),
                                ),
                            }),
                          ),
                        (0, a.createElement)(
                          m.Z,
                          { role: 'menu' },
                          k.map(e => {
                            const { id: t, is_deleted: o } = e;
                            return o
                              ? null
                              : (0, a.createElement)(
                                  d.Z,
                                  { key: t, timeout: 500, classNames: 'woocommerce-inbox-message' },
                                  (0, a.createElement)(_.InboxNoteCard, {
                                    key: t,
                                    note: e,
                                    onDismiss: i,
                                    onNoteActionClick: r,
                                    onBodyLinkClick: y,
                                    onNoteVisible: u,
                                  }),
                                );
                          }),
                        ),
                        w
                          ? null
                          : b
                          ? (0, a.createElement)(
                              c.CardFooter,
                              { className: 'wooocommerce-inbox-card__footer', size: 'medium' },
                              (0, a.createElement)(
                                c.Button,
                                {
                                  isPrimary: !0,
                                  onClick: () => {
                                    E();
                                  },
                                },
                                k.length > g.per_page
                                  ? (0, s.__)('Show more', 'woocommerce')
                                  : (0, s.__)('Show older', 'woocommerce'),
                              ),
                            )
                          : (0, a.createElement)(_.InboxNotePlaceholder, {
                              className: 'banner message-is-unread',
                            }),
                      );
                    })({
                      loadMoreNotes: () => {
                        (0, l.recordEvent)('inbox_action_load_more', { quantity_shown: x.length }),
                          o(t + 10);
                      },
                      hasNotes: (0, h.kS)(x),
                      isBatchUpdating: P,
                      notes: x,
                      onDismiss: async e => {
                        (0, l.recordEvent)('inbox_action_dismiss', {
                          note_name: e.name,
                          note_title: e.title,
                          note_name_dismiss_all: !1,
                          note_name_dismiss_confirmation: !0,
                          screen: R,
                        });
                        const t = e.id;
                        try {
                          await T(t),
                            B('getNotes'),
                            D('success', (0, s.__)('Message dismissed', 'woocommerce'), {
                              actions: [
                                {
                                  label: (0, s.__)('Undo', 'woocommerce'),
                                  onClick: async () => {
                                    await M(t, { is_deleted: 0 }), B('getNotes');
                                  },
                                },
                              ],
                            });
                        } catch (e) {
                          D(
                            'error',
                            (0, s._n)(
                              'Message could not be dismissed',
                              'Messages could not be dismissed',
                              1,
                              'woocommerce',
                            ),
                          );
                        }
                      },
                      onNoteActionClick: (e, t) => {
                        U(e.id, t.id);
                      },
                      onNoteVisible: e => {
                        A[e.id] ||
                          e.is_read ||
                          (f({ ...A, [e.id]: !0 }),
                          setTimeout(() => {
                            M(e.id, { is_read: !0 });
                          }, 3e3)),
                          (0, l.recordEvent)('inbox_note_view', {
                            note_content: e.content,
                            note_name: e.name,
                            note_title: e.title,
                            note_type: e.type,
                            screen: R,
                          });
                      },
                      setShowDismissAllModal: z,
                      showHeader: e,
                      allNotesFetched: u,
                      notesHaveResolved: F,
                      unreadNotesCount: I,
                    }),
                ),
              ),
            );
      };
    },
  },
]);
