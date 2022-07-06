<?php

namespace Runig006\RemovePane;

use Flarum\Extend;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__ . '/js/dist/forum.js'),

    (new Extend\Locales(__DIR__ . '/resources/locale')),
        
    (new Extend\User())
        ->registerPreference('disablePane', 'boolVal', false)
];
