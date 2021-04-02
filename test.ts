// 在此处测试；当此软件包作为插件使用时，将不会编译此软件包。

let Timer = 0


basic.showIcon(IconNames.Heart)

serial.redirectToUSB()


basic.forever(() => {
    basic.pause(1000)
    Timer+=1
    serial.writeValue("Timer", Timer);
    DigitalPet.MoveFish(Timer)
})


