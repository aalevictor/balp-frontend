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
                <div className='w-full gap-3 flex flex-col'>
                    <Text color='text-offwhite' size='text-md' family='font-semibold'>Login</Text>
                    <TextInput.Root>
                        <TextInput.Icon>
                            <TwitchLogo />
                        </TextInput.Icon>
                        <TextInput.Input placeholder='User da Twitch' />
                    </TextInput.Root>
                </div>
                <div className='w-full gap-3 flex flex-col'>
                    <Text color='text-offwhite' size='text-md' family='font-semibold'>Senha</Text>
                    <TextInput.Root>
                        <TextInput.Icon>
                            <Key />
                        </TextInput.Icon>
                        <TextInput.Input placeholder='Senha' type='password' />
                    </TextInput.Root>
                </div>
                <div className='flex items-center gap-2'>
                    <Checkbox />
                    <Text size='text-sm'>Permanecer logado</Text>
                </div>
                <Button>
                    Entrar
                </Button>
                <a href='#' className='outline-none focus:ring-2 ring-offwhite'>
                    <Text size='text-sm' color='text-offwhite' underline>
                        Esqueceu sua senha?
                    </Text>
                </a>
            </Form.Content>,
            <a href='#' className='outline-none focus:ring-2 ring-offwhite'>
                <Text size='text-sm' color='text-offwhite' underline>
                    Não tem uma conta? Cadastre-se!
                </Text>
            </a>
        ]
    },
}