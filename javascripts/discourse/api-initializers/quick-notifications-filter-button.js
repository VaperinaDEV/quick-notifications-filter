import { withPluginApi } from "discourse/lib/plugin-api";
import { h } from "virtual-dom";

export default {
  name: "quick-notifications-filter-button",
  initialize() {
    withPluginApi("0.8.7", (api) => {
      api.decorateWidget("quick-access-notifications:before", (helper) => {
        return helper.attach("quick-notifications-filter", helper);
      });
      api.attachWidgetAction('quick-access-notifications', 'hideReadNotifications', function() {
        document.querySelectorAll("div#quick-access-notifications ul li.read").forEach(elem => elem.classList.add("hidden"));
      });
      api.attachWidgetAction('quick-access-notifications', 'showAllNotifications', function() {
        document.querySelectorAll("div#quick-access-notifications ul li.read").forEach(elem => elem.classList.remove("hidden"));
      });
    });
  },
};
