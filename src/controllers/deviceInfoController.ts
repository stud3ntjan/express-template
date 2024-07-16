import { Controller, Post, Route, Body } from "tsoa";
import { DeviceInfo } from "../models/deviceInfoModel";

@Route("deviceinfo")
export class DeviceInfoController extends Controller {
  @Post("add")
  public async addDeviceInfo(@Body() deviceInfo: DeviceInfo): Promise<string> {
    return "Device information added";
  }
}
