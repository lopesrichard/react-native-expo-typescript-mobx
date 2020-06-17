export type AnimationList = 'walking_taco' | 'walking_pumpkin' | 'resume_analisys' | 'loading' | 'walking_witch';

export const animations = {
  walking_taco: require('./walking_taco.json'), // needs lottie v3
  walking_pumpkin: require('./walking_pumpkin.json'), // needs lottie v3
  resume_analisys: require('./resume_analisys.json'), // needs lottie v3
  loading: require('./loading.json'),
  walking_witch: require('./walking_witch.json'), // needs lottie v3
};
