const employment_status_config = {
  employed: { title: 'employed', color: '--color-error' },
  unemployed: { title: 'unemployed', color: '--color-success' },
  exploring: { title: 'exploring', color: '--color-warning' },
} as const

type EmploymentStatus = keyof typeof employment_status_config

const current_employment_status = (current_status: EmploymentStatus) => {
  return employment_status_config[current_status]
}

const employment_status: EmploymentStatus = 'exploring'

export const status = current_employment_status(employment_status)
