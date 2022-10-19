import { Slot } from '@radix-ui/react-slot'
import { Meta, StoryObj } from '@storybook/react'
import { Key, TwitchLogo } from 'phosphor-react'
import { Button } from './Button'
import { Checkbox } from './Checkbox'
import { Form, FormRootProps } from './Form'
import { Text } from './Text'
import { TextInput } from './TextInput'

export default {
    title: 'Components/Form',
    component: Form.Root,
    args: {
        children: [
            <Form.Content>
            </Form.Content>
        ]
    },
    argTypes: {},
} as Meta<FormRootProps>

export const Default: StoryObj<FormRootProps> = {}

export const Login: StoryObj<FormRootProps> = {
    args: {
        children: [
            <Form.Content>
                <label htmlFor='twitch' className='w-full gap-1 flex flex-col'>
                    <Text size='text-sm' className='text-offwhite'>Login</Text>
                    <TextInput.Root>
                        <TextInput.Icon>
                            <TwitchLogo />
                        </TextInput.Icon>
                        <TextInput.Input placeholder='User da Twitch' name='twitch' id='twitch' />
                    </TextInput.Root>
                </label>
                <label htmlFor='senha' className='w-full gap-1 flex flex-col'>
                    <Text size='text-sm' className='text-offwhite'>Senha</Text>
                    <TextInput.Root>
                        <TextInput.Icon>
                            <Key />
                        </TextInput.Icon>
                        <TextInput.Input placeholder='*********' type='password' name='password' id='password' />
                    </TextInput.Root>
                </label>
                <label htmlFor='remember' className='flex items-center gap-2 cursor-pointer'>
                    <Checkbox id='remember' name='remember' />
                    <Text size='text-xs' className='text-offwhite'>Permanecer logado</Text>
                </label>
                <Button type='submit'>
                    Entrar
                </Button>
                <a href='reset-password' className='outline-none focus:ring-2 ring-offwhite'>
                    <Text size='text-xs' className='underline text-offwhite'>
                        Esqueceu sua senha?
                    </Text>
                </a>
            </Form.Content>,
            <a href='register' className='outline-none focus:ring-2 ring-offwhite'>
                <Text size='text-xs' className='underline text-offwhite'>
                    Não tem uma conta? Cadastre-se!
                </Text>
            </a>
        ]
    },
}