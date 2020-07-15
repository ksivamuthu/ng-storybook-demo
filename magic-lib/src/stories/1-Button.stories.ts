import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { ButtonComponent } from '../../projects/magic-lib/src/lib/button/button.component';

export default {
  title: 'Button',
  component: ButtonComponent,
};

export const Text = () => ({
  component: ButtonComponent,
  props: {
    text: 'Hello Button',
  },
});

export const Emoji = () => ({
  component: ButtonComponent,
  props: {
    text: '😀 😎 👍 💯',
  },
});

Emoji.story = {
  parameters: { notes: 'My notes on a button with emojis' },
};

export const WithSomeEmojiAndAction = () => ({
  component: ButtonComponent,
  props: {
    text: '😀 😎 👍 💯',
    click: action('This was clicked OMG'),
  },
});

WithSomeEmojiAndAction.story = {
  name: 'with some emoji and action',
  parameters: { notes: 'My notes on a button with emojis' },
};

export const ButtonWithLinkToAnotherStory = () => ({
  component: ButtonComponent,
  props: {
    text: 'Go to Welcome Story',
    onClick: linkTo('Welcome'),
  },
});

ButtonWithLinkToAnotherStory.story = {
  name: 'button with link to another story',
};
