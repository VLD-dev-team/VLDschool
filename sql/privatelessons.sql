CREATE TABLE
  public.privatelessons (
    "tutoringID" serial NOT NULL,
    "stripeItemID" character varying(255) NULL,
    "studentID" character varying(255) NULL
  );

ALTER TABLE
  public.privatelessons
ADD
  CONSTRAINT private_lessons_pkey PRIMARY KEY (tutoringID)