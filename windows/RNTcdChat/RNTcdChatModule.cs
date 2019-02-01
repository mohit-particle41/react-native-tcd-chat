using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace Tcd.Chat.RNTcdChat
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class RNTcdChatModule : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="RNTcdChatModule"/>.
        /// </summary>
        internal RNTcdChatModule()
        {

        }

        /// <summary>
        /// The name of the native module.
        /// </summary>
        public override string Name
        {
            get
            {
                return "RNTcdChat";
            }
        }
    }
}
