interface ExtendedWindow extends Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
  declare var window: ExtendedWindow;