namespace DigitalPet {

	/**
	 * WriteTimer to Moving fish
     * @param Timer [0-500] the Time value; eg:  0, 255
	*/
    //% blockId=DigitalPet_MoveFish
    //% block="移动的鱼 |%value|"
    //% weight=55
    //% value.min=0 value.max=500
    export function MoveFish (Timer: number) {
    if (Timer < 20) {
        images.createBigImage(`
        . . . . . . . . . .
        . # # . # . . . . .
        # . . # . . . . . .
        . # # . # . . . . .
        . . . . . . . . . .
        `).showImage(Timer % 5)
    } else if (Timer >= 20&&Timer<30) {
        images.createBigImage(`
            . . . . . . . . . .
            . . . . . . . . . .
            . # # . # . . . . .
            # . . # . . . . . .
            . # # . # . . . . .
            `).showImage(Timer % 5)
    } else if (Timer >= 30&&Timer<40) {
        images.createBigImage(`
            . . . . . . . . . .
            . . . . . . . . . .
            . . . . . . . . . .
            . # # . # . . . . .
            # . . # . . . . . .
            `).showImage(Timer % 5)
    } else if (Timer >= 40) {
        images.createBigImage(`
            . . . . . . . . . .
            . # # # . . . . . .
            . # . # . . . . . .
            . # . # . . . . . .
            # # # # # . . . . .
            `).showImage(0)
    }

    }       
}
namespace Sound {
    let Apin = AnalogPin.P0;
    let Dpin = DigitalPin.P1;

    let noise = 0;
    let volt = 0;
    let adc = 0;


    /**
     * Set the Apin connected to Sound Sensor;
     * @param a_pin_arg Sound Sensor analog connected pin;
     */
    //% blockId=Sound_setApin
    //% block="声音传感器的模拟信号连接到引脚 |%a_pin_arg|"
    //% weight = 85
    export function setApin(a_pin_arg: AnalogPin): void {
        Apin = a_pin_arg;
    }


    /**
     * Set the Dpin connected to Sound Sensor;
     * @param d_pin_arg Sound Sensor digital connected pin;
     */
    //% blockId=Sound_setDpin
    //% block="声音传感器的数字信号连接到引脚(obsolate) |%d_pin_arg|"
    //% weight = 75
    export function setDpin(d_pin_arg: DigitalPin): void {
        Dpin = d_pin_arg;
        pins.setPull(Dpin, PinPullMode.PullUp);
    }


    /**
     * Return the sound sensor adc value from the AnalogPin;
     */
    //% blockId=Sound_getADCValue
    //% block="获取声音传感器的 adc 值"
    //% weight = 65
    export function getADCValue(): number {
        adc = pins.analogReadPin(Apin);
        return adc;
    }

    /**
     * Return the sound sensor volt value from the AnalogPin;
     */
    //% blockId=Sound_getVoltValue
    //% block="获取声音传感器的 volt 值"
    //% weight = 55
    export function getVoltValue(): number {
        adc = pins.analogReadPin(Apin);
        volt = adc * 3300 / 1024;
        return volt;
    }

    /**
     * Return the sound sensor volt value from the DigitalPin;
     */
    //% blockId=Sound_getNoise
    //% block="是否有噪声"
    //% weight = 45
    export function getNoise(): number {
        noise = pins.analogReadPin(Apin);
        if (noise>80) {
            return 1;
        } else {
            return 0;
        }
    }
}
