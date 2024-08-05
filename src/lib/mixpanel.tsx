import mixpanel from 'mixpanel-browser';

// Substitua 'YOUR_PROJECT_TOKEN' pelo seu token do Mixpanel
const MIXPANEL_TOKEN = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;

if (MIXPANEL_TOKEN) {
    mixpanel.init(MIXPANEL_TOKEN);
}

export default mixpanel;