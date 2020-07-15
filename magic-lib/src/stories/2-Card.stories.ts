import { CardComponent } from '../../projects/magic-lib/src/lib/card/card.component';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Card',
  component: CardComponent,
};

export const TitleAndBody = () => ({
  component: CardComponent,
  props: {
    title: text('title', 'Hello Everyone'),
    message: text('message', 'Some quick example text to build on the card title and make up the bulk of the card content.'),
    click: action('Button was clicked'),
  },
});

export const CustomButton = () => ({
  component: CardComponent,
  props: {
    title: text('title', 'Hello Everyone'),
    message: text('message', 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'),
    buttonText: text('buttonText', 'Continue'),
    click: action('Button was clicked')
  },
});
