import { Meta, StoryObj } from '@storybook/react'
import { TextInput, TextInputRootProps } from './TextInput'
import { TwitchLogo } from 'phosphor-react'

export default {
    title: 'Components/TextInput',
    component: TextInput.Root,
    args: {
        children: [
            <TextInput.Icon>
                <TwitchLogo />
            </TextInput.Icon>,
            <TextInput.Input placeholder='Twitch user' />
        ]
    },
    argTypes: {}
} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {}

export const NoIcon: StoryObj<TextInputRootProps> = {
    args: {
        children: [
            <TextInput.Input placeholder='Twitch user' />
        ]
    },
    argTypes: {}
}