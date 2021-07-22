package com.checkoutnative;

import com.facebook.react.ReactActivity;
import android.os.Bundle;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "CheckoutNative";
  }

  // On Android the View state is not persisted consistently across Activity restarts, which can lead to crashes in those cases.
  // It is recommended to override the native Android method called on Activity restarts in your main Activity, to avoid these crashes.
  @Override
  protected void onCreate(Bundle savedInstanceState) {
      super.onCreate(null);
  }
}
