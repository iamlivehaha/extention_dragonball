namespace DigitalPet {

	/**
	 * WriteTimer to Moving fish
     * @param Timer [0-500] the Time value; eg: 128, 0, 255
	*/
    //% blockId=DigitalPet_MoveFish
    //% block="正常移动的鱼 |%value|"
    //% weight=65
    //% value.min=0 value.max=500
    export function MoveFish (Timer: number) {
    if (Timer < 20) {
        images.createImage(`
            . . . . .
            . # # . #
            # . . # .
            . # # . #
            . . . . .
            `).showImage(Timer % 5)
    } else if (Timer >= 20&&Timer<30) {
        images.createImage(`
            . . . . .
            . . . . .
            . # # . #
            # . . # .
            . # # . #
            `).showImage(Timer % 5)
    } else if (Timer >= 30&&Timer<40) {
        images.createImage(`
            . . . . .
            . . . . .
            . . . . .
            . # # . #
            # . . # .
            `).showImage(Timer % 5)
    } else if (Timer >= 40) {
        images.createImage(`
            . . . . .
            . # # # .
            . # . # .
            . # . # .
            # # # # #
            `).showImage(0)
    }

    }       
}
