var _ = Npm.require('lodash');

var themesData = {};

themesData.data = [

    {"name":"amazon","overrides":["lib/semantic-ui/src/themes/amazon/elements/button.overrides.import.less"],"variables":["lib/semantic-ui/src/themes/amazon/elements/button.variables.import.less","lib/semantic-ui/src/themes/amazon/globals/site.variables.import.less"],"assets":[]},

    {"name":"basic","overrides":["lib/semantic-ui/src/themes/basic/collections/table.overrides.import.less","lib/semantic-ui/src/themes/basic/elements/button.overrides.import.less","lib/semantic-ui/src/themes/basic/elements/icon.overrides.import.less","lib/semantic-ui/src/themes/basic/elements/step.overrides.import.less","lib/semantic-ui/src/themes/basic/globals/reset.overrides.import.less","lib/semantic-ui/src/themes/basic/modules/progress.overrides.import.less","lib/semantic-ui/src/themes/basic/views/card.overrides.import.less"],"variables":["lib/semantic-ui/src/themes/basic/collections/table.variables.import.less","lib/semantic-ui/src/themes/basic/elements/button.variables.import.less","lib/semantic-ui/src/themes/basic/elements/icon.variables.import.less","lib/semantic-ui/src/themes/basic/elements/step.variables.import.less","lib/semantic-ui/src/themes/basic/globals/reset.variables.import.less","lib/semantic-ui/src/themes/basic/modules/progress.variables.import.less","lib/semantic-ui/src/themes/basic/views/card.variables.import.less"],"assets":["lib/semantic-ui/src/themes/basic/assets/fonts/icons.eot","lib/semantic-ui/src/themes/basic/assets/fonts/icons.svg","lib/semantic-ui/src/themes/basic/assets/fonts/icons.ttf","lib/semantic-ui/src/themes/basic/assets/fonts/icons.woff"]},

    {"name":"bookish","overrides":["lib/semantic-ui/src/themes/bookish/elements/header.overrides.import.less"],"variables":["lib/semantic-ui/src/themes/bookish/elements/header.variables.import.less"],"assets":[]},

    {"name":"bootstrap3","overrides":["lib/semantic-ui/src/themes/bootstrap3/elements/button.overrides.import.less"],"variables":["lib/semantic-ui/src/themes/bootstrap3/elements/button.variables.import.less"],"assets":[]},

    {"name":"classic","overrides":["lib/semantic-ui/src/themes/classic/collections/table.overrides.import.less","lib/semantic-ui/src/themes/classic/elements/button.overrides.import.less","lib/semantic-ui/src/themes/classic/elements/header.overrides.import.less","lib/semantic-ui/src/themes/classic/modules/progress.overrides.import.less","lib/semantic-ui/src/themes/classic/views/card.overrides.import.less"],"variables":["lib/semantic-ui/src/themes/classic/collections/table.variables.import.less","lib/semantic-ui/src/themes/classic/elements/button.variables.import.less","lib/semantic-ui/src/themes/classic/elements/header.variables.import.less","lib/semantic-ui/src/themes/classic/modules/progress.variables.import.less","lib/semantic-ui/src/themes/classic/views/card.variables.import.less"],"assets":[]},

    {"name":"chubby","overrides":["lib/semantic-ui/src/themes/chubby/collections/form.overrides.import.less","lib/semantic-ui/src/themes/chubby/collections/menu.overrides.import.less","lib/semantic-ui/src/themes/chubby/elements/button.overrides.import.less","lib/semantic-ui/src/themes/chubby/elements/header.overrides.import.less","lib/semantic-ui/src/themes/chubby/modules/accordion.overrides.import.less","lib/semantic-ui/src/themes/chubby/views/comment.overrides.import.less"],"variables":["lib/semantic-ui/src/themes/chubby/collections/form.variables.import.less","lib/semantic-ui/src/themes/chubby/collections/menu.variables.import.less","lib/semantic-ui/src/themes/chubby/elements/button.variables.import.less","lib/semantic-ui/src/themes/chubby/elements/header.variables.import.less","lib/semantic-ui/src/themes/chubby/modules/accordion.variables.import.less","lib/semantic-ui/src/themes/chubby/views/comment.variables.import.less"],"assets":[]},

    {"name":"colored","overrides":["lib/semantic-ui/src/themes/colored/modules/checkbox.overrides.import.less"],"variables":["lib/semantic-ui/src/themes/colored/modules/checkbox.variables.import.less"],"assets":[]},

    {"name":"default","overrides":["lib/semantic-ui/src/themes/default/collections/breadcrumb.overrides.import.less","lib/semantic-ui/src/themes/default/collections/form.overrides.import.less","lib/semantic-ui/src/themes/default/collections/grid.overrides.import.less","lib/semantic-ui/src/themes/default/collections/menu.overrides.import.less","lib/semantic-ui/src/themes/default/collections/message.overrides.import.less","lib/semantic-ui/src/themes/default/collections/table.overrides.import.less","lib/semantic-ui/src/themes/default/modules/accordion.overrides.import.less","lib/semantic-ui/src/themes/default/modules/chatroom.overrides.import.less","lib/semantic-ui/src/themes/default/modules/checkbox.overrides.import.less","lib/semantic-ui/src/themes/default/modules/dimmer.overrides.import.less","lib/semantic-ui/src/themes/default/modules/dropdown.overrides.import.less","lib/semantic-ui/src/themes/default/modules/embed.overrides.import.less","lib/semantic-ui/src/themes/default/modules/modal.overrides.import.less","lib/semantic-ui/src/themes/default/modules/nag.overrides.import.less","lib/semantic-ui/src/themes/default/modules/popup.overrides.import.less","lib/semantic-ui/src/themes/default/modules/progress.overrides.import.less","lib/semantic-ui/src/themes/default/modules/rating.overrides.import.less","lib/semantic-ui/src/themes/default/modules/search.overrides.import.less","lib/semantic-ui/src/themes/default/modules/shape.overrides.import.less","lib/semantic-ui/src/themes/default/modules/sidebar.overrides.import.less","lib/semantic-ui/src/themes/default/modules/sticky.overrides.import.less","lib/semantic-ui/src/themes/default/modules/tab.overrides.import.less","lib/semantic-ui/src/themes/default/modules/transition.overrides.import.less","lib/semantic-ui/src/themes/default/elements/button.overrides.import.less","lib/semantic-ui/src/themes/default/elements/container.overrides.import.less","lib/semantic-ui/src/themes/default/elements/divider.overrides.import.less","lib/semantic-ui/src/themes/default/elements/flag.overrides.import.less","lib/semantic-ui/src/themes/default/elements/header.overrides.import.less","lib/semantic-ui/src/themes/default/elements/icon.overrides.import.less","lib/semantic-ui/src/themes/default/elements/image.overrides.import.less","lib/semantic-ui/src/themes/default/elements/input.overrides.import.less","lib/semantic-ui/src/themes/default/elements/label.overrides.import.less","lib/semantic-ui/src/themes/default/elements/list.overrides.import.less","lib/semantic-ui/src/themes/default/elements/loader.overrides.import.less","lib/semantic-ui/src/themes/default/elements/rail.overrides.import.less","lib/semantic-ui/src/themes/default/elements/reveal.overrides.import.less","lib/semantic-ui/src/themes/default/elements/segment.overrides.import.less","lib/semantic-ui/src/themes/default/elements/step.overrides.import.less","lib/semantic-ui/src/themes/default/globals/reset.overrides.import.less","lib/semantic-ui/src/themes/default/globals/site.overrides.import.less","lib/semantic-ui/src/themes/default/views/ad.overrides.import.less","lib/semantic-ui/src/themes/default/views/card.overrides.import.less","lib/semantic-ui/src/themes/default/views/comment.overrides.import.less","lib/semantic-ui/src/themes/default/views/feed.overrides.import.less","lib/semantic-ui/src/themes/default/views/item.overrides.import.less","lib/semantic-ui/src/themes/default/views/statistic.overrides.import.less"],"variables":["lib/semantic-ui/src/themes/default/collections/breadcrumb.variables.import.less","lib/semantic-ui/src/themes/default/collections/form.variables.import.less","lib/semantic-ui/src/themes/default/collections/grid.variables.import.less","lib/semantic-ui/src/themes/default/collections/menu.variables.import.less","lib/semantic-ui/src/themes/default/collections/message.variables.import.less","lib/semantic-ui/src/themes/default/collections/table.variables.import.less","lib/semantic-ui/src/themes/default/modules/accordion.variables.import.less","lib/semantic-ui/src/themes/default/modules/chatroom.variables.import.less","lib/semantic-ui/src/themes/default/modules/checkbox.variables.import.less","lib/semantic-ui/src/themes/default/modules/dimmer.variables.import.less","lib/semantic-ui/src/themes/default/modules/dropdown.variables.import.less","lib/semantic-ui/src/themes/default/modules/embed.variables.import.less","lib/semantic-ui/src/themes/default/modules/modal.variables.import.less","lib/semantic-ui/src/themes/default/modules/nag.variables.import.less","lib/semantic-ui/src/themes/default/modules/popup.variables.import.less","lib/semantic-ui/src/themes/default/modules/progress.variables.import.less","lib/semantic-ui/src/themes/default/modules/rating.variables.import.less","lib/semantic-ui/src/themes/default/modules/search.variables.import.less","lib/semantic-ui/src/themes/default/modules/shape.variables.import.less","lib/semantic-ui/src/themes/default/modules/sidebar.variables.import.less","lib/semantic-ui/src/themes/default/modules/sticky.variables.import.less","lib/semantic-ui/src/themes/default/modules/tab.variables.import.less","lib/semantic-ui/src/themes/default/modules/transition.variables.import.less","lib/semantic-ui/src/themes/default/elements/button.variables.import.less","lib/semantic-ui/src/themes/default/elements/container.variables.import.less","lib/semantic-ui/src/themes/default/elements/divider.variables.import.less","lib/semantic-ui/src/themes/default/elements/flag.variables.import.less","lib/semantic-ui/src/themes/default/elements/header.variables.import.less","lib/semantic-ui/src/themes/default/elements/icon.variables.import.less","lib/semantic-ui/src/themes/default/elements/image.variables.import.less","lib/semantic-ui/src/themes/default/elements/input.variables.import.less","lib/semantic-ui/src/themes/default/elements/label.variables.import.less","lib/semantic-ui/src/themes/default/elements/list.variables.import.less","lib/semantic-ui/src/themes/default/elements/loader.variables.import.less","lib/semantic-ui/src/themes/default/elements/rail.variables.import.less","lib/semantic-ui/src/themes/default/elements/reveal.variables.import.less","lib/semantic-ui/src/themes/default/elements/segment.variables.import.less","lib/semantic-ui/src/themes/default/elements/step.variables.import.less","lib/semantic-ui/src/themes/default/globals/reset.variables.import.less","lib/semantic-ui/src/themes/default/globals/site.variables.import.less","lib/semantic-ui/src/themes/default/views/ad.variables.import.less","lib/semantic-ui/src/themes/default/views/card.variables.import.less","lib/semantic-ui/src/themes/default/views/comment.variables.import.less","lib/semantic-ui/src/themes/default/views/feed.variables.import.less","lib/semantic-ui/src/themes/default/views/item.variables.import.less","lib/semantic-ui/src/themes/default/views/statistic.variables.import.less"],"assets":["lib/semantic-ui/src/themes/default/assets/fonts/icons.eot","lib/semantic-ui/src/themes/default/assets/fonts/icons.svg","lib/semantic-ui/src/themes/default/assets/fonts/icons.ttf","lib/semantic-ui/src/themes/default/assets/fonts/icons.woff","lib/semantic-ui/src/themes/default/assets/fonts/icons.woff2","lib/semantic-ui/src/themes/default/assets/images/flags.png"]},

    {"name":"fixed","overrides":["lib/semantic-ui/src/themes/fixed-width/collections/grid.overrides.import.less","lib/semantic-ui/src/themes/fixed-width/modules/modal.overrides.import.less"],"variables":["lib/semantic-ui/src/themes/fixed-width/collections/grid.variables.import.less","lib/semantic-ui/src/themes/fixed-width/modules/modal.variables.import.less"],"assets":[]},

    {"name":"duo","overrides":["lib/semantic-ui/src/themes/duo/elements/loader.overrides.import.less"],"variables":["lib/semantic-ui/src/themes/duo/elements/loader.variables.import.less"],"assets":[]},

    {"name":"flat","overrides":["lib/semantic-ui/src/themes/flat/collections/form.overrides.import.less","lib/semantic-ui/src/themes/flat/globals/site.overrides.import.less"],"variables":["lib/semantic-ui/src/themes/flat/collections/form.variables.import.less","lib/semantic-ui/src/themes/flat/globals/site.variables.import.less"],"assets":[]},

    {"name":"github","overrides":["lib/semantic-ui/src/themes/github/collections/form.overrides.import.less","lib/semantic-ui/src/themes/github/collections/menu.overrides.import.less","lib/semantic-ui/src/themes/github/collections/message.overrides.import.less","lib/semantic-ui/src/themes/github/elements/button.overrides.import.less","lib/semantic-ui/src/themes/github/elements/icon.overrides.import.less","lib/semantic-ui/src/themes/github/elements/input.overrides.import.less","lib/semantic-ui/src/themes/github/elements/label.overrides.import.less","lib/semantic-ui/src/themes/github/elements/segment.overrides.import.less","lib/semantic-ui/src/themes/github/elements/step.overrides.import.less","lib/semantic-ui/src/themes/github/modules/dropdown.overrides.import.less"],"variables":["lib/semantic-ui/src/themes/github/collections/breadcrumb.variables.import.less","lib/semantic-ui/src/themes/github/collections/form.variables.import.less","lib/semantic-ui/src/themes/github/collections/grid.variables.import.less","lib/semantic-ui/src/themes/github/collections/menu.variables.import.less","lib/semantic-ui/src/themes/github/collections/message.variables.import.less","lib/semantic-ui/src/themes/github/collections/table.variables.import.less","lib/semantic-ui/src/themes/github/globals/site.variables.import.less","lib/semantic-ui/src/themes/github/elements/button.variables.import.less","lib/semantic-ui/src/themes/github/elements/header.variables.import.less","lib/semantic-ui/src/themes/github/elements/icon.variables.import.less","lib/semantic-ui/src/themes/github/elements/image.variables.import.less","lib/semantic-ui/src/themes/github/elements/input.variables.import.less","lib/semantic-ui/src/themes/github/elements/label.variables.import.less","lib/semantic-ui/src/themes/github/elements/segment.variables.import.less","lib/semantic-ui/src/themes/github/elements/step.variables.import.less","lib/semantic-ui/src/themes/github/modules/dropdown.variables.import.less","lib/semantic-ui/src/themes/github/modules/popup.variables.import.less"],"assets":["lib/semantic-ui/src/themes/github/assets/fonts/octicons-local.ttf","lib/semantic-ui/src/themes/github/assets/fonts/octicons.svg","lib/semantic-ui/src/themes/github/assets/fonts/octicons.ttf","lib/semantic-ui/src/themes/github/assets/fonts/octicons.woff"]},

    {"name":"gmail","overrides":["lib/semantic-ui/src/themes/gmail/collections/message.overrides.import.less"],"variables":["lib/semantic-ui/src/themes/gmail/collections/message.variables.import.less"],"assets":[]},

    {"name":"material","overrides":["lib/semantic-ui/src/themes/material/elements/button.overrides.import.less","lib/semantic-ui/src/themes/material/elements/header.overrides.import.less","lib/semantic-ui/src/themes/material/collections/menu.overrides.import.less","lib/semantic-ui/src/themes/material/globals/site.overrides.import.less","lib/semantic-ui/src/themes/material/modules/dropdown.overrides.import.less","lib/semantic-ui/src/themes/material/modules/modal.overrides.import.less"],"variables":["lib/semantic-ui/src/themes/material/elements/button.variables.import.less","lib/semantic-ui/src/themes/material/elements/header.variables.import.less","lib/semantic-ui/src/themes/material/collections/menu.variables.import.less","lib/semantic-ui/src/themes/material/globals/site.variables.import.less","lib/semantic-ui/src/themes/material/modules/dropdown.variables.import.less","lib/semantic-ui/src/themes/material/modules/modal.variables.import.less"],"assets":[]},

    {"name":"instagram","overrides":["lib/semantic-ui/src/themes/instagram/views/card.overrides.import.less"],"variables":["lib/semantic-ui/src/themes/instagram/views/card.variables.import.less"],"assets":[]},

    {"name":"pulsar","overrides":["lib/semantic-ui/src/themes/pulsar/elements/loader.overrides.import.less"],"variables":["lib/semantic-ui/src/themes/pulsar/elements/loader.variables.import.less"],"assets":[]},

    {"name":"raised","overrides":["lib/semantic-ui/src/themes/raised/elements/button.overrides.import.less"],"variables":["lib/semantic-ui/src/themes/raised/elements/button.variables.import.less"],"assets":[]},

    {"name":"round","overrides":["lib/semantic-ui/src/themes/round/elements/button.overrides.import.less"],"variables":["lib/semantic-ui/src/themes/round/elements/button.variables.import.less"],"assets":[]},

    {"name":"resetcss","overrides":["lib/semantic-ui/src/themes/resetcss/globals/reset.overrides.import.less"],"variables":["lib/semantic-ui/src/themes/resetcss/globals/reset.variables.import.less"],"assets":[]},

    {"name":"striped","overrides":["lib/semantic-ui/src/themes/striped/modules/progress.overrides.import.less"],"variables":["lib/semantic-ui/src/themes/striped/modules/progress.variables.import.less"],"assets":[]},

    {"name":"rtl","overrides":["lib/semantic-ui/src/themes/rtl/globals/site.overrides.import.less"],"variables":["lib/semantic-ui/src/themes/rtl/globals/site.variables.import.less"],"assets":[]},

    {"name":"timeline","overrides":["lib/semantic-ui/src/themes/timeline/views/feed.overrides.import.less"],"variables":["lib/semantic-ui/src/themes/timeline/views/feed.variables.import.less"],"assets":[]},

    {"name":"twitter","overrides":["lib/semantic-ui/src/themes/twitter/elements/button.overrides.import.less"],"variables":["lib/semantic-ui/src/themes/twitter/elements/button.variables.import.less"],"assets":[]},

];

themesData.exists = function(name) {
  var sameName = function(theme) {
    return theme.name == name;
  };
  return _.isUndefined(_.find(this.data, sameName)) ? false : true;
};

themesData.overridesFilePaths = function() {
  return filePaths(this.data, 'overrides');
};

themesData.variablesFilePaths = function() {
  return filePaths(this.data, 'variables');
};

themesData.assetsFilePaths = function() {
  return filePaths(this.data, 'assets');
};

var filePaths = function(themes, property) {
  var themeWithProperty = _.filter(themes, function(theme) {
    return theme[property];
  });
  return _.reduce(themeWithProperty, function(result, theme) {
    return result.concat(theme[property]);
  }, []);
};

themesData.themeConfigFile = 'lib/semantic-ui/src/theme.config.import.less';
themesData.themeLessFile = 'lib/semantic-ui/src/theme.import.less';

semanticUiPackage.themesData = themesData;
