export default function ({ redirect, $strapi }) {
  if ($strapi.user.role.name !== 'Admin') {
    return redirect('/login')
  }
}
