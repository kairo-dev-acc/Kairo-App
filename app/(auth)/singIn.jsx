import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Button from '../../components/button'

export default function singIn() {
  return (
    <SafeAreaView>

        <Button linkTo="/(auth)"/>
    </SafeAreaView>
  )
}