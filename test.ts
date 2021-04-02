// 在此处测试；当此软件包作为插件使用时，将不会编译此软件包。

let volt = 0

let adc = 0

basic.showIcon(IconNames.Heart)

serial.redirectToUSB()

Liquid.setPin(AnalogPin.P0)

basic.forever(() => {

    adc = Liquid.getADCValue()

    serial.writeValue("adc", adc)

    volt = Liquid.getVoltValue()

    serial.writeValue("mV", volt)

    basic.pause(500)
})


