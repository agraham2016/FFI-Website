export type Story = {
  quote: string;
  attribution: string;
  role: string;
  highlight?: string;
};

// PLACEHOLDER stories — replace with real testimonials before launch.
export const stories: Story[] = [
  {
    quote:
      "For the first time, our son is cooking his own breakfast, managing his own schedule, and asking for what he needs. The growth has been remarkable.",
    attribution: "A family member",
    role: "Parent of a Supported Living member",
    highlight: "Cooking, scheduling, and self-advocacy",
  },
  {
    quote:
      "FFI's coach helped me prepare for my first interview. I got the job and I've been there six months. I feel proud of what I do.",
    attribution: "An Employment Services member",
    role: "Member, Employment Services",
    highlight: "First interview, first job, six months in",
  },
  {
    quote:
      "What I appreciate most is how individualized everything is. The team listens, adapts, and follows through. We finally feel like we have partners in this.",
    attribution: "A guardian",
    role: "Guardian",
    highlight: "Listened to. Adapted. Followed through.",
  },
];
