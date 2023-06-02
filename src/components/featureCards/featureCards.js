import {
    createStyles,
    Text,
    Card,
    SimpleGrid,
    Container,
    rem,
  } from '@mantine/core';
  import { IconDrone, Icon24Hours, IconAugmentedReality,  } from '@tabler/icons-react';
  
  const mockdata = [
    {
      title: 'Expertise in Drone Solutions',
      description:
      "Rely on CropScout AG's expertise in drone solutions to address your specific agricultural challenges with tailored and effective strategies.",
      icon: IconDrone,
    },
    {
      title: 'Cutting-Edge Technology',
      description:        
      "Experience the power of cutting-edge technology with CropScout AG's drones, equipped with high-resolution cameras and sensors for accurate data collection.",
      icon: IconAugmentedReality,
    },
    {
      title: 'Reliable and Efficient Service',
      description:
      'Choose CropScout AG for reliable and efficient service that ensures your agricultural drone needs are met promptly and professionally.',  
      icon: Icon24Hours,
    },
  ];
  
  const useStyles = createStyles((theme) => ({
    title: {
      fontSize: rem(34),
      fontWeight: 900,
  
      [theme.fn.smallerThan('sm')]: {
        fontSize: rem(24),
      },
    },
  
    description: {
      maxWidth: 600,
      margin: 'auto',
  
      '&::after': {
        content: '""',
        display: 'block',
        backgroundColor: '#137547',
        width: rem(45),
        height: rem(2),
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
  
    card: {
      border: `${rem(1)} solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
      }`,
    },
  
    cardTitle: {
      '&::after': {
        content: '""',
        display: 'block',
        backgroundColor: '#137547',
        width: rem(45),
        height: rem(2),
        marginTop: theme.spacing.sm,
      },
    },
  }));
  
  export function FeaturesCards() {
    const { classes } = useStyles();
    const features = mockdata.map((feature) => (
      <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
        <feature.icon size={rem(50)} stroke={2} color="#137547" />
        <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
          {feature.title}
        </Text>
        <Text fz="sm" c="dimmed" mt="sm">
          {feature.description}
        </Text>
      </Card>
    ));
  
    return (
      <Container size="lg" py="xl">
        <Text c="dimmed" className={classes.description} ta="center" mt="md"></Text>
        <SimpleGrid cols={3} spacing="xl" mt={50} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
          {features}
        </SimpleGrid>
      </Container>
    );
  }