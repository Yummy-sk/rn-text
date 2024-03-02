import {
  requireNativeComponent,
  UIManager,
  Platform,
  type ViewStyle,
} from 'react-native';

const LINKING_ERROR =
  `The package 'rn-text' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

type RnTextProps = {
  color: string;
  style: ViewStyle;
};

const ComponentName = 'RnTextView';

export const RnTextView =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<RnTextProps>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };
