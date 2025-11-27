import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Button from '../../components/button.jsx'
import Input from '../../components/InPut.jsx'
import { COLOR } from '../../constants/color.js'

export default function singup() {

  const [name,setName] = useState()

  return (
    <SafeAreaView>

        <Input value={name}
        onChange={setName}
        placeholder="Enter your name" />
        <Button linkTo="/(auth)" textName="Continue" TextColor="#fff" backgroundColor="#0a5611ff" onPressfunction={()=>{}}/>
        <Input value={name}
        onChange={setName}
        placeholder="Enter your name" />
    </SafeAreaView>
  )
}