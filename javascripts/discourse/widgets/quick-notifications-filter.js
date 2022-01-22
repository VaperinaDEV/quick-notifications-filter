import { action } from "@ember/object";
import { createWidget } from "discourse/widgets/widget";

export default createWidget("quick-notifications-filter", {
  tagName: "div.quick-notifications-filter",
  buildKey: () => `quick-notifications-filter`,

  html(helper) {

    let customItems = [];
    let tab = helper.attrs.currentQuickAccess;

    customItems.push(
      this.attach("button", {
        label: themePrefix("notifilter.all"),
        title: themePrefix("notifilter.all_title"),
        action: "showAllNotifications",
        className: "btn-default btn-icon-text",
      })
    );
    customItems.push(
      this.attach("button", {
        label: themePrefix("notifilter.unread"),
        title: themePrefix("notifilter.unread_title"),
        action: "hideReadNotifications",
        className: "btn-default btn-icon-text unread-btn",
      })
    );

    return customItems;
  },
});
