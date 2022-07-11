import sys
import binascii
from bluepy.btle import Scanner, DefaultDelegate

macaddr = 'ce:6d:0d:47:69:21'

class ScanDelegate( DefaultDelegate ):
  def __init__( self ):
    DefaultDelegate.__init__( self )

  def handleDiscovery( self, dev, isNewDev, isNewData ):
    if dev.addr == macaddr:
      data = dev.getScanData()
      for item in data:
        if(item[0] == 22):
          isLight = "false"
          bytedata = binascii.unhexlify(str(item[2]))
          if( bytedata[7] & 0x02 ): isLight = "true"

          print( '{"isLight":' + str( isLight ) + '}' )
          exit()

macaddr = sys.argv[1]
scanner = Scanner().withDelegate(ScanDelegate())
scanner.scan(0)