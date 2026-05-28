import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: {
    maxLoginAttempts: process.env.NODE_ENV === 'development' ? 0 : 5,
    lockTime: 600 * 1000,
  },
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['email', 'firstName', 'lastName', 'role'],
    description: 'CMS administrators and editors for africantradechamber.org',
  },
  fields: [
    {
      name: 'firstName',
      type: 'text',
      label: 'First name',
    },
    {
      name: 'lastName',
      type: 'text',
      label: 'Last name',
    },
    {
      name: 'displayName',
      type: 'text',
      label: 'Display name',
      admin: {
        description: 'Shown in the admin bar. Leave blank to use first + last name.',
      },
    },
    {
      name: 'jobTitle',
      type: 'text',
      label: 'Job title',
      admin: {
        placeholder: 'e.g. Communications Manager',
      },
    },
    {
      name: 'phone',
      type: 'text',
      label: 'Phone',
    },
    {
      name: 'role',
      type: 'select',
      label: 'Role',
      defaultValue: 'admin',
      options: [
        { label: 'Administrator', value: 'admin' },
        { label: 'Editor', value: 'editor' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'bio',
      type: 'textarea',
      label: 'Bio / notes',
      admin: {
        description: 'Optional — visible on your account page only.',
      },
    },
  ],
  hooks: {
    beforeChange: [
      ({ data }) => {
        if (!data) return data
        const first = typeof data.firstName === 'string' ? data.firstName.trim() : ''
        const last = typeof data.lastName === 'string' ? data.lastName.trim() : ''
        const display =
          typeof data.displayName === 'string' ? data.displayName.trim() : ''
        if (!display && (first || last)) {
          data.displayName = [first, last].filter(Boolean).join(' ')
        }
        return data
      },
    ],
  },
}
