// (C) Copyright 2015 Moodle Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { Component } from '@angular/core';
import { CoreBlockPreRenderedComponent } from '@features/block/components/pre-rendered-block/pre-rendered-block';

/**
 * Component to render a rss client block.
 */
@Component({
    selector: 'addon-block-rss-client',
    templateUrl: '../../../../../core/features/block/components/pre-rendered-block/core-block-pre-rendered.html',
    styleUrls: ['rssclient.scss'],
})
export class AddonBlockRssClientComponent extends CoreBlockPreRenderedComponent {}
