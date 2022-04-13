# expense-reimbursement-system-front-end

## Project Description
The Expense Reimbursement System (ERS) will manage the process of reimbursing employees for expenses incurred while on company time. All employees in the company can log in and submit requests for reimbursement and view their past tickets and pending requests. Finance managers can log in and view all reimbursement requests and history for all employees in the company. Finance managers are authorized to approve and deny requests for expense reimbursement.

## Technologies Used
* HTML5
* CSS3
* JavaScript
* PostgreSQL 14
* AJAX
* Java 8
* JDBC
* Javalin 4.4.0
* Jupiter 5.8.1
* Mockito 4.4.0
* JWT
* Jackson databind 2.12.4

## Features
* As a logged-in employee, I can submit reimbursement requests.
* As a logged-in employee, I can upload a document or image of my receipt when submitting reimbursements.
* As a logged-in employee, I can view my past reimbursement requests.
* As a logged-in employee, I can view the reimbursement status as pending, approved or denied.
* As a logged-in manager, I can view all reimbursement requests and history for all employees in the company.
* As a logged-in manager, I can filter requests by status.
* As a logged-in manager, I can approve or deny a reimbursement request.

## Getting Started
1. Clone this repo to your local machine using `git clone <repo-link>`.
2. Clone the [backend repo](https://github.com/ankurshahi80/expense-reimbursement-system) to your local machine using `git clone <repo-link>`
3. Make sure you have have the following tools installed on your local machine.
  - [Java SE Development Kit 8](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)  
    - Install the JDK on macOS  
      - First you must [create an Oracle account](https://docs.oracle.com/en/cloud/get-started/subscriptions-cloud/csgsg/get-oracle-com-account.html). When you have an account with Oracle, complete the following steps.
        1. Navigate to the [JDK download page](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html).
        2. Select the "mac OS x64" download option.
        3. Click the user agreement and scroll to the bottom, then check the box to accept the agreement.
        4. Sign in to your Oracle account.
        5. When the download is complete, open the installation files package.
        6. When the installation package window pops up, double-click the package icon to launch the install wizard.
        7. In the Introduction section of the install wizard, click Continue.
        8. The Destination Select section should automatically choose an installation location and redirect you to the next section.
        9. In the Installation Type section, click Install.
        10. Enter your password in the pop-up prompt, and click Install Software.
        11. When the installation is complete, you should see a message that says, "The software was successfully installed."
        12. You'll be automatically directed to the Summary Section, which means that you've successfully installed Java!
        13. Click the close button, and select "Move to Trash" for the installation files.
        14. Open Terminal and run the command `java -version` to check that the installation completed successfully. You can also verify this by opening System Preferences and looking for a Java icon there, as shown in the following image:
        ![image](https://user-images.githubusercontent.com/79622822/163214046-56d0c809-279a-4f7c-9413-18f3db588cc6.png)  

    - Install the JDK on Windows
      - First you must [create an Oracle account](https://docs.oracle.com/en/cloud/get-started/subscriptions-cloud/csgsg/get-oracle-com-account.html). When you have an account with Oracle, complete the following steps.
        1. Navigate to the [JDK download page](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html).
        2. Select the "Windows x86" download option.
        3. Click the user agreement and scroll to the bottom, then check the box accepting the agreement.
        4. Sign in to your Oracle account.
        5. Run the install file.
        6. On the first setup page, click Install, as shown in the following image:
        ![image](https://user-images.githubusercontent.com/79622822/163215367-dd559968-d995-4a0d-9da2-0abe858a6745.png)
        7. Select the install path and click next.
        8. On the "Change in License Terms" page, click OK.
        9. Once again, choose the installation directory.
        10. Click Next. When the Complete page appears, you've successfully installed Java!
  



  - [IntelliJ IDEA](https://www.jetbrains.com/idea/)
    - Install the IntelliJ IDEA Community Edition for macOS
      - Install IntelliJ IDEA to use as your code editor. Complete the following steps:
        1. Navigate to the [IntelliJ IDEA download page](https://www.jetbrains.com/idea/download/#section=mac).
        2. Download the Community Edition for macOS.
        3. Run the disk image file after it downloads.
        4. In the Finder window that pops up, drag the IntelliJ IDEA CE icon into your Applications folder, as shown in the following image:
        ![image](https://user-images.githubusercontent.com/79622822/163222348-0415bc97-8807-42bd-912e-61b384e792d9.png)
        5. In the Applications folder, open IntelliJ in Launchpad.
        6. Click Open when prompted to open a third-party app downloaded from the internet.
        7. When prompted to import IntelliJ settings from a config or installation folder, choose the default "Do not import settings" option and click OK.
        8. The next step is left to your own discretion! You can either choose to send usage statistics or choose the "Don't send" option to keep from sharing data.
        9. Next you’ll be prompted to customize IntelliJ IDEA. You can choose to "Skip remaining and set defaults", or you can click through (to set the theme and so on) until you reach the "Start Using IntelliJ" button.
        10. Don't forget to eject the install drive and delete the IntelliJ IDEA disk image from your Downloads folder after successful installation.
    - Install the IntelliJ IDEA for Windows
      - Install IntelliJ IDEA to use as your code editor. Complete the following steps:
        1. Navigate to the [IntelliJ IDEA download page](https://www.jetbrains.com/idea/download/#section=windows).
        2. Download the Community Edition
        3. Run the install file.
        4. On the first setup page, choose Next.
        5. Select the destination folder and click Next.
        6. Mark the "Update PATH variable option", create the ".java" association, and click Next.
        7. Click Install.
        8. Choose your preferred option for when to reboot.
        9. Once you've, rebooted, launch IntelliJ.
        10. Accept the Privacy Policy and continue.
        11. The final step is left to your discretion. You can either choose to send usage statistics or choose the "Don't send" option to keep from sharing data.
4. Run `npm install` command.
5. Install and run PlanetRank backend code to start the server 
6. Run `ng serve` command.

## Usage

## License
This project uses the following license: [MIT](https://choosealicense.com/licenses/mit/)