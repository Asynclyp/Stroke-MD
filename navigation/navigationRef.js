import { createNavigationContainerRef } from "@react-navigation/native";

// Root navigation to handle navigation on component that are not direct screens
// or any file where we can't use the navigation hook or prop
export const navigationRef = createNavigationContainerRef();

export function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}
