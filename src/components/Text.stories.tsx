import  { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from './Text'

export default {
    title: 'Components/Text',
    component: Text,
    args: {
        children: 'Loren ipsum.',
        size: 'text-md',
    },
    argTypes: {
        size: {
            options: [ 'text-xs', 'text-sm', 'text-md', 'text-lg', 'text-xl' ],
            control: {
                type: 'inline-radio',
            }
        },  
    }
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}

export const ExtraSmall: StoryObj<TextProps> = {
    args: {
        size: 'text-xs'
    }
}

export const Small: StoryObj<TextProps> = {
    args: {
        size: 'text-sm'
    }
}

export const Large: StoryObj<TextProps> = {
    args: {
        size: 'text-lg'
    }
}

export const ExtraLarge: StoryObj<TextProps> = {
    args: {
        size: 'text-xl'
    }
}

export const CustomComponent: StoryObj<TextProps> = {
    args: {
        asChild: true,
        children: (<p>Loren Ipsum</p>),
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        },
        asChild: {
            table: {
                disable: true,
            }
        }
    }
}