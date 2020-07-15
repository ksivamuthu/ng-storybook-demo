import { setCompodocJson } from '@storybook/addon-docs/angular';
import docJson from '../documentation.json'
setCompodocJson(docJson);

import { addDecorator } from '@storybook/angular';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';

addDecorator(withA11y);
addDecorator(withKnobs);


