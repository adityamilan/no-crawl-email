  $(document).ready(function() {
    // Suppose you have email address, user@sampledomain.com and you want
    // to show this to your site visitors but do not want it to get crawled by bots.
    // Now simply put your email address like this

    __eml_adr = 'user#sampledomain%com'.replace('#','@').replace('%','.');
    // This is very basic encryption just to present proof of concept but you
    // can increse the security by using more complext way to cypher and then
    // decypher it using custom javascript functions insted of replace function.

    // Now make it usable for your site visitors
    $('#mail_as_text')[0].innerText = 'Email: '+__eml_adr;
    $('#mail_as_href').attr('href', 'mailto:'+__eml_adr);
  });
