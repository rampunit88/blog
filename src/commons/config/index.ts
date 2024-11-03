
export const ProtectedNavigation = [
    { name: 'Dashboard', href: '/dashboard', current: true },
    { name: 'Projects', href: '/projects', current: false },
    { name: 'Team', href: '/teams', current: false },
    { name: 'Task', href: '/tasks', current: false },
].map(item => {
    return { ...item, href: '/admin' + item.href }
})