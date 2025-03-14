export const templateOne = `
{{name}}
{{email}}
{{phone}}
{{company}}
{{date}}

I am excited to apply for the {{role}} position at {{company}}. With 10 years of experience specializing in React development, UI optimization, and team leadership, I am confident in my ability to contribute to your team’s success.\n
In my current role as a Senior Front-End Developer at Orange Systems, I lead a team of four developers in building scalable web applications. I have extensive experience working with {{stack}}, ensuring optimized performance and maintainability. Additionally, I have implemented role-based access control (RBAC) in enterprise applications, improving security and user experience.\n
I am particularly impressed by {{company}}’s commitment to innovation and would love the opportunity to bring my technical expertise and leadership skills to your team. I look forward to the possibility of discussing how my experience aligns with your needs. Thank you for your time and consideration.\n
Sincerely,
{{name}}
`;

export const templateTwo = `
{{name}}  
{{email}}  
{{phone}}  
{{company}}  
{{date}}  

 I am writing to express my interest in the {{role}} position at {{company}}. With a strong background in front-end development and a passion for creating intuitive user experiences, I believe my skills align well with the requirements of this role.  

Throughout my career, I have worked extensively with {{stack}}, building scalable and high-performing applications. In my current role at Orange Systems, I lead a team of developers, optimizing UI components and implementing role-based access control (RBAC) for enhanced security. My ability to collaborate across teams and solve complex problems efficiently has contributed to the success of multiple projects.  

I am particularly drawn to {{company}} because of its commitment to innovation and excellence in the tech industry. I would welcome the opportunity to contribute my expertise and enthusiasm to your team. I look forward to discussing how my experience can benefit {{company}}.  

Thank you for your time and consideration. I hope to connect soon!  

Best regards,  
{{name}}  
`;

export const templateGenerationPrompt = `
Generate a cover letter  based on the following user data:\n
{{user}} use just data provided without suggestions and set the date to today.\n
Use ${templateTwo} for reference.\n
`;
