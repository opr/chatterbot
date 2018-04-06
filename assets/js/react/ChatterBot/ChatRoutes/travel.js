export const travel = {
  logoSVG: 'assets/img/logo.svg',
  logo: 'assets/img/logo.png',
  messages: {
    welcome: {
      message: 'Hi, we are Darwin Digital. We help travel agencies make the most of the internet. How can we help you today?',
      options: [{text: 'I want to be rich', step: 'riches'}, {text: 'I hate being rich', step: 'donations'}]
    },
    riches: {
      message: 'Maybe you should rob a bank?',
      options: [{text: 'I don\'t have a gun', step: 'guns'}]
    },
    guns: {
      message: 'We can sell you a gun for £99.99'
    },
    donations: {
      message: 'We are experts on helping rich people offload some of their unneeded wealth. Please visit our offices with a briefcase full of cash and see how we can make a difference.',
      options: [{text: 'enter your email', type: 'email'}]
    }
  }
};
