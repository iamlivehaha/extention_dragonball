@namespace
class DigitalPet:
    """
    
    WriteTimer to Moving fish
    @param Timer [0-500] the Time value; eg:  0, 255
    
    """
    # % blockId=DigitalPet_MoveFish
    # % block="移动的鱼 |%value|"
    # % weight=55
    # % value.min=0 value.max=500
    def MoveFish(timer: number):
        if timer < 20:
            images.create_big_image("""
        . . . . . . . . . .
        . # # . # . . . . .
        # . . # . . . . . .
        . # # . # . . . . .
        . . . . . . . . . .
        """).show_image(timer % 5)
        elif timer >= 20 and timer < 30:
            images.create_big_image("""
            . . . . . . . . . .
            . . . . . . . . . .
            . # # . # . . . . .
            # . . # . . . . . .
            . # # . # . . . . .
            """).show_image(timer % 5)
        elif timer >= 30 and timer < 40:
            images.create_big_image("""
            . . . . . . . . . .
            . . . . . . . . . .
            . . . . . . . . . .
            . # # . # . . . . .
            # . . # . . . . . .
            """).show_image(timer % 5)
        elif timer >= 40:
            images.create_big_image("""
            . . . . . . . . . .
            . # # # . . . . . .
            . # . # . . . . . .
            . # . # . . . . . .
            # # # # # . . . . .
            """).show_image(0)
@namespace
class Sound:
    Apin = AnalogPin.P0
    Dpin = DigitalPin.P1
    noise = 0
    volt = 0
    adc = 0
    """
    
    Set the Apin connected to Sound Sensor;
    @param a_pin_arg Sound Sensor analog connected pin;
    
    """
    # % blockId=Sound_setApin
    # % block="声音传感器的模拟信号连接到引脚 |%a_pin_arg|"
    # % weight = 85
    def setApin(a_pin_arg: AnalogPin):
        global Apin
        Apin = a_pin_arg
    """
    
    Set the Dpin connected to Sound Sensor;
    @param d_pin_arg Sound Sensor digital connected pin;
    
    """
    # % blockId=Sound_setDpin
    # % block="声音传感器的数字信号连接到引脚(obsolate) |%d_pin_arg|"
    # % weight = 75
    def setDpin(d_pin_arg: DigitalPin):
        global Dpin
        Dpin = d_pin_arg
        pins.set_pull(Dpin, PinPullMode.PULL_UP)
    """
    
    Return the sound sensor adc value from the AnalogPin;
    
    """
    # % blockId=Sound_getADCValue
    # % block="获取声音传感器的 adc 值"
    # % weight = 65
    def getADCValue():
        global adc
        adc = pins.analog_read_pin(Apin)
        return adc
    """
    
    Return the sound sensor volt value from the AnalogPin;
    
    """
    # % blockId=Sound_getVoltValue
    # % block="获取声音传感器的 volt 值"
    # % weight = 55
    def getVoltValue():
        global adc, volt
        adc = pins.analog_read_pin(Apin)
        volt = adc * 3300 / 1024
        return volt
    """
    
    Return the sound sensor volt value from the DigitalPin;
    
    """
    # % blockId=Sound_getNoise
    # % block="是否有噪声"
    # % weight = 45
    def getNoise():
        global noise
        noise = pins.analog_read_pin(Apin)
        if noise > 30:
            return 1
        else:
            return 0