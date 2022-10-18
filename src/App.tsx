import { Slot } from '@radix-ui/react-slot'
import { Key, TwitchLogo } from 'phosphor-react'
import { Button } from './components/Button'
import { Checkbox } from './components/Checkbox'
import { Form } from './components/Form'
import { Text } from './components/Text'
import { TextInput } from './components/TextInput'
import './styles/global.css'
import bg from './assets/bg.png'
import { PlayerHeader } from './components/PlayerHeader'

export function App() {
  return (
    // <div className='w-full h-full absolute py-8 flex' style={{ backgroundImage:`url(${bg})` }}>
    <div className='w-full h-full absolute flex'>
      <Form.Root>
        <Form.Content>
          <div className="w-full gap-1 flex flex-col p-0">
            <Text
              color="text-offwhite"
              size="text-sm"
              children="Login" />
            <TextInput.Root>
              <TextInput.Icon>
                <TwitchLogo />
              </TextInput.Icon>
              <TextInput.Input placeholder="User da Twitch" />
            </TextInput.Root>
          </div>
          <div className="w-full gap-1 flex flex-col">
            <Text
              color="text-offwhite"
              size="text-sm"
              children="Senha" />
            <TextInput.Root>
              <TextInput.Icon>
                <Key />
              </TextInput.Icon>
              <TextInput.Input
                placeholder="Senha"
                type="password"
              />
            </TextInput.Root>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox />
            <Text size='text-sm'>
              Permanecer logado
            </Text>
          </div>
          <Button>
            Entrar
          </Button>
          <a
            className="outline-none focus:ring-2 ring-offwhite"
            href="#"
          >
            <Text
              color="text-offwhite"
              size="text-xs"
              underline
            >
              Esqueceu sua senha?
            </Text>
          </a>
        </Form.Content>
        <a
          className="outline-none focus:ring-2 ring-offwhite"
          href="#"
        >
          <Text
            color="text-offwhite"
            size="text-xs"
            underline
          >
            Não tem uma conta? Cadastre-se!
          </Text>
        </a>
      </Form.Root>
    </div>
  )
}
