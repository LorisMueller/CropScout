import { IconUserStar } from '@tabler/icons-react';
import React from 'react';
import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  createStyles,
  rem,
} from '@mantine/core';

const useStyles = createStyles((theme) => ({
  card: {
    margin: 'auto',
    marginTop: theme.spacing.md,
    width: 460,
    //backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    backgroundColor: '#F5F5F5',
  },

  cardImage: {
    marginRight: theme.spacing.lg,
    marginLeft: theme.spacing.lg,
  },

  cardTitle: {
    marginRight: theme.spacing.md,
    marginTop: theme.spacing.md,
  },

  textTitle: {
    fontSize: '25px',
    fontFamily: 'Lexend',
  },

  section: {
    borderBottom: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
      }`,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.md,
  },

  textDescription: {
    fontSize: '15px',
    fontFamily: 'Lexend',
    fontWeight: 300,
    marginTop: theme.spacing.xl,
    marginBottom: theme.spacing.md,
    marginLeft: theme.spacing.md,
  },

  like: {
    color: theme.colors.red[6],
  },

  color: {
    backgroundColor: '#1375477c',
    color: '#137547'
  },

  label: {
    textTransform: 'uppercase',
    fontSize: theme.fontSizes.xs,
    fontWeight: 700,
  },
}));

interface BadgeCardProps {
  image: string;
  title: string;
  country: string;
  description: string;
  badges: {
    emoji: string;
    label: string;
  }[];
}

export function BadgeCard({ image, title, description, country, badges }: BadgeCardProps) {
  const { classes, theme } = useStyles();

  const features = badges.map((badge) => (
    <Badge
      color={theme.colorScheme === 'dark' ? 'dark' : 'gray'}
      key={badge.label}
      leftSection={badge.emoji}
    >
      {badge.label}
    </Badge>
  ));

  return (
    <Card radius="md" p="md" className={classes.card}>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link href="https://fonts.googleapis.com/css2?family=Lexend&display=swap" rel="stylesheet"></link>
      <Card.Section className={classes.section} mt="md">
        <Group>
          <Image src={image} alt={title} width={120} className={classes.cardImage} />
          <Card.Section className={classes.cardTitle}>
            <Badge size="lg" className={classes.color}>{country}</Badge>
            <Text fw={500} className={classes.textTitle}>
              {title}
            </Text>
          </Card.Section>
        </Group>
        <Text className={classes.textDescription} mt="xs">
          {description}
        </Text>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Text mt="md" className={classes.label} c="dimmed">
        </Text>
        <Group spacing={7} mt={5}>
          {features}
        </Group>
      </Card.Section>
    </Card>
  );
}