import  { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from './Text'

export default {
    title: 'Components/Text',
    component: Text,
    args: {
        color: 'offwhite',
        children: 'Loren ipsum.',
        size: 'md',
        family: 'normal'
    },
    argTypes: {
        size: {
            options: [ 'xs', 'sm', 'md', 'lg', 'xl' ],
            control: {
                type: 'inline-radio',
            }
        },
        family: {
            options: [ 'normal', 'semibold', 'bold', 'extrabold', 'black' ],
            control: {
                type: 'inline-radio',
            }
        }    
    }
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}

export const ExtraSmall: StoryObj<TextProps> = {
    args: {
        size: 'xs'
    }
}

export const Small: StoryObj<TextProps> = {
    args: {
        size: 'sm'
    }
}

export const Large: StoryObj<TextProps> = {
    args: {
        size: 'lg'
    }
}

export const ExtraLarge: StoryObj<TextProps> = {
    args: {
        size: 'xl'
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