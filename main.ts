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
        if (noise>40) {
            return 1;
        } else {
            return 0;
        }
    }
}
namespace Teris {

	/**
	 * move block left 1 step
     * @Current_Squares the current block list; eg:[]
     * @All_Sprites the list of all blocks; eg:[]
	*/
    //% blockId=Teris_BlockMoveLeft
    //% block="方块左移 |%Current_Squares|%All_Sprites|"
    //% weight=55
    export function BlockMoveLeft (Current_Squares:game.LedSprite[],All_Sprites:game.LedSprite[]) {
        let tempx =0
        let tempy =0
        let Ismoveable =1
        for (let 值32 of Current_Squares) {
            tempx = 值32.x() - 1
            tempy = 值32.y()
            if (tempx < 0) {
                Ismoveable = 0
                break;
            } else {
                Ismoveable = 1
            }
            for(let spt of All_Sprites)
            {
                if(spt.y()==tempy&&spt.x()==tempx)
                {
                    Ismoveable=0
                    break;
                }
            }
            if(Ismoveable==0)break
        }
        if (Ismoveable == 1) {
            for (let Current_sprite of Current_Squares) {
                Current_sprite.set(LedSpriteProperty.Direction, -90)
                Current_sprite.move(1)
            }
        }  
    }

    /**
	 * move block right 1 step
     * @Current_Squares the current block list; eg:[]
     * @All_Sprites the list of all blocks; eg:[]
	*/
    //% blockId=Teris_BlockMoveRight
    //% block="方块右移 |%Current_Squares|%All_Sprites|"
    //% weight=65
    export function BlockMoveRight (Current_Squares:game.LedSprite[],All_Sprites:game.LedSprite[]) {
        let tempx2 =0
        let tempy2 =0
        let Ismoveable2 =1
        for (let 值4 of Current_Squares) {
            tempx2 = 值4.x() + 1
            tempy2 = 值4.y()
            if (tempx2 > 4) {
                Ismoveable2 = 0
                break;
            } else {
                Ismoveable2 = 1
            }
            for (let sptB of All_Sprites) {
                if (sptB.y() == tempy2 && sptB.x() == tempx2) {
                    Ismoveable2 = 0
                    break;
                }
            }
            if (Ismoveable2 == 0) {
                break;
            }
        }
        if (Ismoveable2 == 1) {
            for (let 值42 of Current_Squares) {
                值42.set(LedSpriteProperty.Direction, 90)
                值42.move(1)
            }
        }
        }

    /**
	 * move block rotate 90 degree
     * @Current_Squares the current block list; eg:[]
     * @All_Sprites the list of all blocks; eg:[]
	*/
    //% blockId=Teris_BlockRotate
    //% block="方块旋转 |%Current_Squares|%All_Sprites|"
    //% weight=75
    export function BlockRotate (Current_Squares:game.LedSprite[],All_Sprites:game.LedSprite[]) {
        let tempx3 =0
        let tempy3 =0
        let Ismoveable3 =1
        let anchorX = Current_Squares[0].x()
        let anchorY = Current_Squares[0].y()
        for (let 值36 of Current_Squares) {
                tempx3 = 值36.y() + (anchorX - anchorY)
                tempy3 = anchorX + anchorY - 值36.x()
                if (tempx3 < 0 || tempy3 < 0 || tempx3 > 4 || tempy3 > 4) {
                    Ismoveable3 = 0
                    break;
                } else {
                    Ismoveable3 = 1
                }
                for (let aspt of All_Sprites) {
                    if (aspt.x() == tempx3 && aspt.y() == tempy3) {
                        Ismoveable3 = 0
                        break;
                    }
                }
                if (Ismoveable3 == 0) {
                    break;
                }
            }
            if (Ismoveable3 == 1) {
                for (let cspt of Current_Squares) {
                    tempx3 = cspt.y() + (anchorX - anchorY)
                    tempy3 = anchorX + anchorY - cspt.x()
                    cspt.set(LedSpriteProperty.X, tempx3)
                    cspt.set(LedSpriteProperty.Y, tempy3)
                }
            }
    }

}
//
//% weight=55 color=#0000FF icon="\uf1b2"
namespace FishingGame {

	/**5
	 * WriteTimer to Moving fish
     * @param FishType [1-3] the Fish Type; eg:  1
	*/
    //% blockId=FishingGame_CreateRandomFish
    //% block="随机创造鱼 |%FishType|"
    //% weight=55
    //% value.min=0 value.max=2
    export function CreateRandomFish (FishType: number) {
    // 0:mackerel鲭（产于北大西洋）；马鲛鱼
    // 1:真鲷red sea bream
    // 2:Shark 鲨鱼
        let Fish  = null
        let Fish_X =0
        let Fish_Y =0
        if (FishType == 1) {
            Fish_X = randint(0, 4)
            Fish_Y = randint(3, 4)
        } else if (FishType == 2) {
            Fish_X = randint(0, 4)
            Fish_Y = randint(5, 9)
        } else if (FishType == 3) {
            Fish_X = randint(0, 4)
            Fish_Y = randint(10, 14)
        }
        Fish = game.createSprite(Fish_X % 5, Fish_Y % 5)
        Fish.set(LedSpriteProperty.Blink, 500)
        return Fish
    } 
    }
