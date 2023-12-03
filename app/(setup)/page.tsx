import { redirect } from 'next/navigation';
import { db } from '@/lib/db';
import { initialProfile } from '@/lib/initial-profile';

const SetupPage = async () => {
  const profile = await initialProfile();

  //   find the server that the user is a member of
  //   to redirect them to that server
  const server = await db.server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  if (server) {
    return redirect(`/servers/${server.id}`);
  }

  return <div>Create a Server</div>;
};

export default SetupPage;
