import { action } from "@ember/object";
import RawHtml from "discourse/widgets/raw-html";
import { iconHTML } from "discourse-common/lib/icon-library";
import { createWidget } from "discourse/widgets/widget";
import { h } from "virtual-dom";
import I18n from "I18n";

createWidget("quick-notifications-filter", {
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

createWidget("quick-no-unread-message", {
  html() {
    const liReadHidden = document.querySelectorAll("div#quick-access-notifications ul li.hidden");
    const allLiItem = document.querySelectorAll("div#quick-access-notifications ul li");
    let ICON = iconHTML('bell');
    
    if (liReadHidden.length == allLiItem.length && liReadHidden.length > 0) {
      return h("div.empty-state.notifilter", [
        h(
          "span.empty-state-icon",
          new RawHtml({
            html:
              ICON,
          })
        ),
        h("span.empty-state-title", I18n.t(themePrefix("notifilter.no_notifications_title"))),
        h(
          "span.empty-state-footer",
          new RawHtml({
            html:
              "<a href='/my/notifications'>" + I18n.t(themePrefix("notifilter.no_notifications_link")) + "</a>",
          })
        ),
      ]);
    }
  },
});
