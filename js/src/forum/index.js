import { extend } from 'flarum/common/extend';
import addPreferences from './addPreferences';
import app from 'flarum/forum/app';
import DiscussionPage from 'flarum/forum/components/DiscussionPage';

app.initializers.add('runig006/remover-tab', () => {
    addPreferences();

    extend(DiscussionPage.prototype, 'oninit', function () {
        if (app.session.user.preferences().disablePane == false) {
            return;
        }
        app.pane.disable()
    });

    extend(DiscussionPage.prototype, 'oncreate', function () {
        if (app.session.user.preferences().disablePane == false) {
            return;
        }

        for (const i of this.element.children) {
            if (i.className === 'DiscussionPage-list') {
                i.remove();
            }
        }
    });
});
