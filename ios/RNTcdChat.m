
#import "RNTcdChat.h"
#import <React/RCTLog.h>

@implementation RNTcdChat

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(pingMe:(RCTResponseSenderBlock)callback)
{
    NSString *str = @"Testing Chat";
    RCTLogInfo(@"Pretending to create an event Mohit@ at Sam@");
    callback(@[str]);
}

@end
  
