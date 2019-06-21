/**
 * Filters
 *
 * Plugin that adds a new tab to the settings section to create client-side e-mail filtering.
 *
 * @version 2.1.9
 * @author Roberto Zarrelli <zarrelli@unimol.it>
 * @developer Artur Petrov <artur@phpchain.ru>
 */

const rcmail = global.rcmail;
const rcube_find_object = global.rcube_find_object;

if (rcmail) {
  rcmail.addEventListener('init', (evt) => {
    // register command
    rcmail.register_command('plugin.filters-delete', () => rcmail.goto_url('plugin.filters-delete'), true);
    rcmail.register_command('plugin.filters-save', () => {
      let input_searchstring = rcube_find_object('_searchstring');

      if (input_searchstring && input_searchstring.value === '') {
        alert(rcmail.gettext('nosearchstring', 'filters'));
        input_searchstring.focus();
      } else {
        rcmail.gui_objects.filtersform.submit();
      }
    }, true);
  });
}
