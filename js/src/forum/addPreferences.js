import { extend, override } from 'flarum/common/extend';
import FieldSet from 'flarum/common/components/FieldSet';
import SettingsPage from 'flarum/common/components/SettingsPage';
import Switch from 'flarum/common/components/Switch';
import ItemList from 'flarum/common/utils/ItemList';

export default function () {
    extend(SettingsPage.prototype, 'settingsItems', function (items) {
        items.add(
            'remover-tab',
            FieldSet.component(
                {
                    label: app.translator.trans('runig006-removepane.forum.settings.heading'),
                    className: 'remove-tab',
                },
                this.removeTabItems().toArray()
            )
        );
    });

    SettingsPage.prototype['removeTabItems'] = function () {
        const items = new ItemList();
        items.add(
            'remove-tab',
            Switch.component(
                {
                    state: this.user.preferences().disablePane,
                    onchange: (value) => {
                        this.disablePane = true;
                        this.user.savePreferences({ disablePane: value }).then(() => {
                            m.redraw();
                        });
                    },
                },
                app.translator.trans('runig006-removepane.forum.settings.label')
            )
        );
        return items;
    };
}
