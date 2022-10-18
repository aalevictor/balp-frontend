import './styles/global.css'
import bg from './assets/bg.png'
import { Form } from './components/Form'
import { Text } from './components/Text'
import { TextInput } from './components/TextInput'
import { Key, TwitchLogo } from 'phosphor-react'
import { Checkbox } from './components/Checkbox'
import { Button } from './components/Button'

export function App() {
  return (
    <div className='w-screen h-screen bg-blue-4 flex items-center justify-center p-2' style={{ 
      backgroundImage: `url(${bg})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover', 
    }}>
      <Form.Root>
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
        </Form.Content>
        <a href='register' className='outline-none focus:ring-2 ring-offwhite'>
            <Text size='text-xs' className='underline text-offwhite'>
                Não tem uma conta? Cadastre-se!
            </Text>
        </a>
      </Form.Root>
    </div>
  )
}
