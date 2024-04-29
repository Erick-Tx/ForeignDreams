import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin-bottom: 1rem;
`;

const ProfileHeading = styled.h1`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const ProfileSubheading = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const ProfileInfo = styled.p`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

function UserProfile() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    isAuthenticated && (
      <ProfileContainer>
        <ProfileImage src={user.picture} alt={user.name} />
        <ProfileHeading>{user.name}</ProfileHeading>
        <ProfileSubheading>User Profile</ProfileSubheading>
        <ProfileInfo>Email: {user.email}</ProfileInfo>
        <ProfileInfo>Usuario: {user.nickname}</ProfileInfo>
        <ProfileInfo>Proveedor: {user.sub.split('|')[0]}</ProfileInfo>
        <ProfileInfo>ID de usuario: {user.sub.split('|')[1]}</ProfileInfo>
        <ProfileInfo>País: {user.country}</ProfileInfo>
        <ProfileInfo>Ciudad: {user.city}</ProfileInfo>
      </ProfileContainer>
    )
  );
}

export default UserProfile;
