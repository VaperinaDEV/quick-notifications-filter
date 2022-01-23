import { withPluginApi } from "discourse/lib/plugin-api";

export default {
  name: "quick-notifications-filter-init",
  initialize() {
    withPluginApi("0.8.7", (api) => {
      api.decorateWidget("quick-access-notifications:before", (helper) => {
        return helper.attach("quick-notifications-filter", helper);
      });
      api.decorateWidget("quick-access-notifications:before", (helper) => {
        return helper.attach("quick-no-unread-message", helper);
      });
      api.attachWidgetAction('quick-access-notifications', 'showAllNotifications', function() {
        const liRead = document.querySelectorAll("div#quick-access-notifications ul li");
        liRead.forEach(elem => elem.classList.replace("hidden", "read"));
      });
      api.attachWidgetAction('quick-access-notifications', 'hideReadNotifications', function() {
        const liRead = document.querySelectorAll("div#quick-access-notifications ul li");
        liRead.forEach(elem => elem.classList.replace("read", "hidden"));
      });
    });
  },
};
